spells.add({
  connector: "AAVE-V3-A", // ID for AAVE connector
  method: "deposit",
  args: [
    "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE", // address to be used for Matic transactions on AAVE
    "1000000000000000000", // 1 MATIC (10^18 wei)
    0,
    0,
  ],
});
