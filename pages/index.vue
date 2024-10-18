<script setup lang="ts">
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import ColumnGroup from 'primevue/columngroup';
import Row from 'primevue/row';

const metaStore = useMetaStore();

const tableData = computed(() => metaStore.tableData);
</script>

<template>
  <div class="p-4 overflow-auto">
    <DataTable
      :value="tableData"
      striped-rows
      :sort-order="1"
      sort-field="ranking"
      size="small"
      class="mb-8"
    >
      <ColumnGroup type="header">
        <Row>
          <Column
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
          <a
            class="flex items-center gap-2 select-none"
            :href="`/teams/${slotProps.data.info.abbr}`"
          >
            <div class="h-6 w-6">
              <TeamLogo
                :abbr="slotProps.data.info.abbr"
              />
            </div>
            <p class="hidden sm:block">
              {{ slotProps.data.info.fullName }}
            </p>
            <p class="block sm:hidden">
              {{ slotProps.data.info.name }}
            </p>
          </a>
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
</style>
