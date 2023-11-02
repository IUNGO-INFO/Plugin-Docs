---
sidebar_position: 4
---

# Commands & Permissions

## Discord Commands

| Command             | Description                                                                                                                                                          |
|---------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `/help`             | Shows all the current Discord commands available.                                                                                                                   |
| `/leaderboard [option]` | Shows the leaderboard for the list of valid leaderboards. For example, `/leaderboard wins` will display the wins leaderboard.                                          |
| `/link`             | Allows the Discord user to link their Minecraft account. Linking the Minecraft account is necessary for custom commands with placeholders, party commands, and using the `/player` command without the need to specify a username. |
| `/party`            | Allows you to manage parties. You can view, invite, create, and kick players from a party.                                                                         |
| `/ping`             | Shows the Discord and bot's ping to measure responsiveness.                                                                                                           |
| `/player`           | Displays information about a specific Minecraft player. If the Discord user has already linked their Minecraft account using the `/link` command, they can use `/player` without specifying a username to view their own information. |
| `/update_slashes`   | Updates the registered Discord commands. This command is often used by developers to update the bot's available commands after making changes. (OWNER ONLY) *See `config.yml`* |



## Minecraft Permissions

| Permission               | Description                                               |
|--------------------------|-----------------------------------------------------------|
| `bedwars1058-discord.admin`            | To show an update check message to server operators and users with this permission.             |
