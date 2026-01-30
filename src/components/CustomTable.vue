<template>
  <table class="custom-table">
    <thead class="custom-table__head">
    <tr>
      <th
        v-for="(head, index) in heads"
        :key="index"
      >
        {{ head }}
      </th>
    </tr>
    </thead>

    <tbody class="custom-table__body">
    <tr
      v-for="(row, rowIndex) in data"
      :key="rowIndex"
    >
      <td
        v-for="(cell, cellIndex) in row"
        :key="cellIndex"
      >
        {{ cell }}
      </td>
    </tr>
    </tbody>
  </table>
</template>

<script setup>
defineProps({
  heads: {
    type: Array,
    required: true,
    default: () => []
  },
  data: {
    type: Array,
    required: true,
    default: () => []
  }
})

defineEmits([])
</script>

<style lang="scss" scoped>
.custom-table {
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
  font-family: system-ui, -apple-system, sans-serif;
}

.custom-table__head th {
  background-color: #000000;
  color: #f6f6f6;
  padding: 14px 16px;
  font-weight: 600;
  text-align: left;
}

.custom-table__head th:first-child {
  border-top-left-radius: 8px;
}

.custom-table__head th:last-child {
  border-top-right-radius: 8px;
}

.custom-table__body tr {
  cursor: pointer;
  transition: background-color 0.18s ease;
}

.custom-table__body tr:hover {
  background-color: #f0f0f0;
}

.custom-table__body td {
  padding: 12px 16px;
  border-bottom: 1px solid #e0e0e0;
  color: #1a1a1a;

  transition: background-color 0.18s ease;

}

.custom-table__body tr:hover td {
  background-color: #e9f3ff;

  transition: background-color 0.18s ease;
}
</style>
