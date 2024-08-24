<script setup lang="ts">
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import ColumnGroup from 'primevue/columngroup';
import Row from 'primevue/row';

const metaStore = useMetaStore();
const router = useRouter();

const tableData = computed(() => metaStore.tableData);
</script>

<template>
  <div class="p-4 flex justify-center">
    <DataTable
      :value="tableData"
      striped-rows
      sort-order="1"
      sort-field="ranking"
    >
      <ColumnGroup type="header">
        <Row>
          <Column
            header="Rank"
            :rowspan="2"
            sortable
            field="ranking"
          />
          <Column
            header="Team"
            :rowspan="2"
          />
          <Column
            header="Tradable 1sts"
            :colspan="2"
          />
          <Column
            header="Total Picks"
            :colspan="2"
          />
        </Row>
        <Row>
          <!-- Tradable -->
          <Column
            header="Picks"
            sortable
            field="tradeInfo.firsts.tradable.total"
          />
          <Column
            header="Swaps"
            sortable
            field="tradeInfo.firsts.swappable.total"
          />
          <!-- Total -->
          <Column
            header="1sts"
            sortable
            field="tradeInfo.firsts.picks"
          />
          <Column
            header="2nds"
            sortable
            field="tradeInfo.seconds.picks"
          />
        </Row>
      </ColumnGroup>

      <Column
        field="ranking"
      />
      <Column
        field="info.fullName"
      >
        <template #body="slotProps">
          <div
            class="flex items-center gap-2"
            @click="router.push(`/teams/${slotProps.data.info.abbr}`)"
          >
            <div class="h-6">
              <TeamLogo
                :abbr="`${slotProps.data.info.abbr}`"
                filled
              />
            </div>
            {{ slotProps.data.info.fullName }}
          </div>
        </template>
      </Column>
      <Column
        field="tradeInfo.firsts.tradable.total"
      />
      <Column
        field="tradeInfo.firsts.swappable.total"
      />
      <Column
        field="tradeInfo.firsts.picks"
      >
        <template #body="slotProps">
          {{ slotProps.data.tradeInfo.firsts.picks.length }}
        </template>
      </Column>
      <Column field="tradeInfo.seconds.picks">
        <template #body="slotProps">
          {{ slotProps.data.tradeInfo.seconds.picks.length }}
        </template>
      </Column>
    </DataTable>
  </div>
</template>

<style scoped>
.main-table td,
.main-table th {
  @apply px-2 py-1;
}

.main-table th {
  @apply bg-slate-700 text-white;
}
</style>
