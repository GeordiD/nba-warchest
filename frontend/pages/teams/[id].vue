<script setup lang="ts">
import type { DraftAsset } from '#imports';

const route = useRoute();

const teamStore = useTeamsStore();
const pickStore = usePickStore();

await teamStore.fetchIfNecessary();
await pickStore.fetchIfNecessary();

const team = computed(() => teamStore.teams.find(x =>
  x.abbr.toLowerCase() === (route.params.id as string).toLowerCase()),
)

const teamInfoStore = useTeamInfoStore(team.value!)();

const years = [2024, 2025, 2026, 2027, 2028, 2029, 2030];

const picksForYear = (assets: DraftAsset[], year: number) => assets.filter(x => x.year === year);
</script>

<template>
  <div class="m-4">
    <h1>{{ team?.fullName }}</h1>
    <div>
      <h2>Picks</h2>
      <div class="flex flex-col gap-4">
        <div
          v-for="year in years"
          :key="year"
        >
          <p class="font-semibold text-lg">
            {{ year }}
          </p>
          <div class="grid grid-cols-2">
            <div>
              <h3 class="font-semibold">
                Firsts
              </h3>
              <ul class="list-disc pl-4">
                <li
                  v-for="asset in picksForYear(teamInfoStore.roundOneAssets, year)"
                  :key="asset.id"
                >
                  <PickInfo :asset="asset" />
                </li>
              </ul>
            </div>
            <div>
              <h3 class="font-semibold">
                Seconds
              </h3>
              <ul class="list-disc pl-4">
                <li
                  v-for="asset in picksForYear(teamInfoStore.roundTwoAssets, year)"
                  :key="asset.id"
                >
                  <PickInfo :asset="asset" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
