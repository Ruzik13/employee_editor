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
        @click="emit('selectBar', rowIndex)"
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
    default: () => []
  }
})

const emit = defineEmits(['selectBar']);
</script>

<style lang="scss" scoped>
.custom-table {
  width: 100%;

  border-collapse: collapse;
  border-spacing: 0;
}

.custom-table__head th {
  padding: 14px 16px;

  text-align: left;
  font-weight: 600;
  color: #f6f6f6;

  background-color: #000000;
}

.custom-table__head th:first-child {
  border-top-left-radius: 8px;
}

.custom-table__head th:last-child {
  border-top-right-radius: 8px;
}

.custom-table__body tr {
  cursor: pointer;
}

.custom-table__body td {
  padding: 12px 16px;

  color: #1a1a1a;

  border-bottom: 1px solid #e0e0e0;
  transition: background-color 0.18s ease;
}

.custom-table__body tr:hover td {
  background-color: #e9f3ff;
  transition: background-color 0.18s ease;
}
</style>
