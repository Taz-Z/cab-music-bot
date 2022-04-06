module.exports = {
  name: "play",
  description: `Queues up a song`,
//   auth: authRoles.developer,
  cooldown: 5,
  async execute(message, args) {
    const [ids, _, memb] = getIdGuildMemb(message);

    if (
      (message.channel.type !== "DM" && message.channel.id !== ids.balance) ||
      !memb
    ) {
      return;
    }
  },
};
