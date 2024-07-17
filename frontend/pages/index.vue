<script setup lang="ts">
const metaStore = useMetaStore();
const router = useRouter();

const tableData = computed(() =>
  Object.values(metaStore.metaPerTeam)
    .sort((a, b) => {
      // Trades > Swaps > Seconds (TBD)
      const tradeDiff = b.tradeInfo.tradable.total - a.tradeInfo.tradable.total;
      const swapDiff = b.tradeInfo.swappable.total - a.tradeInfo.swappable.total;
      const secondDiff = b.tradeInfo.seconds.total - a.tradeInfo.seconds.total;

      return tradeDiff * 10000 + swapDiff * 100 + secondDiff;
    }),
)
</script>

<template>
  <div class="p-4 flex justify-center">
    <table class="table-auto border-spacing-1 border-separate">
      <thead>
        <tr>
          <th>
            Team
          </th>
          <th>
            1sts
          </th>
          <th>
            Swaps
          </th>
          <th>
            2nds
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="teamMeta in tableData"
          :key="teamMeta.info.abbr"
          @click="router.push(`/teams/${teamMeta.info.abbr}`)"
        >
          <td>{{ teamMeta.info.fullName }}</td>
          <td>{{ teamMeta.tradeInfo.tradable.total }}</td>
          <td>{{ teamMeta.tradeInfo.swappable.total }}</td>
          <td>{{ teamMeta.tradeInfo.seconds.total }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
