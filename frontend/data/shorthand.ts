export const favorableSwap = 'favorable swap with';
export const unfavorableSwap = 'unfavorable swap with';

export const prot = (num: number, subs = true) =>
  `${subs ? '(' : ''}top ${num} prot.${subs ? ')' : ''}`;

export const ifNotConvey = (becomes: string[], pickName?: string) => {
  const conveyanceLine = `If ${pickName ? pickName + ' pick' : ''} does not convey, becomes`;

  if (becomes.length > 1) {
    return [
      `${conveyanceLine}:`,
      ...becomes,
    ]
  } else {
    return `${conveyanceLine} ${becomes[0]}`
  }
};
