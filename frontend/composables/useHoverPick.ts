const hoveredId = ref('');

export function useHoverPick(thisId: string) {
  const isIdActive = computed(() => hoveredId.value === thisId);
  const isTarget = ref(false);

  function onMouseOver() {
    hoveredId.value = thisId;
    isTarget.value = true;
  }

  function onMouseOut() {
    hoveredId.value = '';
    isTarget.value = false;
  }

  return {
    isIdActive,
    isTarget,

    onMouseOver,
    onMouseOut,
  }
}
