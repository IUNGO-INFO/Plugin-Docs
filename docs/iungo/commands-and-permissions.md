---
sidebar_position: 2
---

# Commands & Permissions

## Commands

| Command                   | Description                                                               |
|---------------------------|---------------------------------------------------------------------------|
| `/iungo skip`             | Skips the current song in the music queue.                                |
| `/iungo pause`            | Pauses the current song in the music queue.                               |
| `/iungo play`             | Adds a new song to the music queue.                                       |
| `/iungo queue`            | Opens a queue GUI showing the upcoming music details and allows skipping to specific songs, as well as play and pause the music. |
| `/iungo resume`           | Continues playing the music if it is paused.                              |
| `/iungo volume`           | Changes the volume of the music.                                         |
| Admin Commands:           |                                                                           |
| `/iungo clearcooldown`    | Clears cooldowns of a specific player. *(Admin Command)*                  |
| `/iungo dashboard`        | Generates a link to the IUNGO website to modify the IUNGO Bot. *(Admin Command)* |


Please note that all commands are subcommands and must start with `/iungo`.



## Permissions

| Permission               | Description                                               |
|--------------------------|-----------------------------------------------------------|
| `iungo.admin`            | Gives access to all IUNGO admin permissions.             |
| `iungo.admin.clearcooldown` | Gives access to reset user cooldowns.                   |
| `iungo.admin.dashboard` | Gives access to the IUNGO dashboard.                     |
| `iungo.admin.updatenotify` | Gives access to receive update notifications.          |
| `iungo.admin.reload`     | Gives access to reload the IUNGO plugin.                 |
| `iungo.play`             | Allows use of the `/play` command.                       |
| `iungo.pause`            | Allows use of the `/pause` command.                      |
| `iungo.resume`           | Allows use of the `/resume` command.                     |
| `iungo.skip`             | Allows use of the `/skip` command.                       |
| `iungo.volume`           | Allows use of the `/volume` command.                     |
| `iungo.queue`            | Allows use of the `/queue` command.                      |
| `iungo.notify`           | Allows user to receive music notifications.               |


#### Note: You can use `iungo.admin.*` to grant a user ALL permissions related to IUNGO Music Integration plugin.

