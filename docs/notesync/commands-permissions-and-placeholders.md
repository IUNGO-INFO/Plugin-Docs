---
sidebar_position: 4
---

# Commands, Permissions & Placeholders

## Discord Commands

| Command       | Description                                               |
|---------------|-----------------------------------------------------------|
| `/join`       | Make the bot join your current music channel.            |
| `/leave`      | Make the bot leave its current music channel.            |
| `/link`       | Allows the Discord user to link their Minecraft account. |
| `/pause`      | Pause the current track.                                  |
| `/play <song>`| Add a new song to the music queue.                       |
| `/queue`      | View the current music queue.                            |
| `/repeat`     | Enable or disable repeating the current song.             |
| `/skip`       | Skip to the next song, or clear the queue if it is the last song. |
| `/stop`       | Stop the music and clear the queue.                      |
| `/uptime`     | Show the server/music bot's uptime!                      |

## Minecraft Commands

| /music       | /notesync | /ns |
|---------------|-----------|------------------------------------------------|
| Alias | Main Command | Alias |

| Command       | Description                                               |
|---------------|-----------------------------------------------------------|
| `/music help`       | View a list of all my commands.            |
| `/music join`       | Make the bot join your current music channel.            |
| `/music leave`      | Make the bot leave its current music channel.            |
| `/music link`       | Allows the Discord user to link their Discord account. |
| `/music pause`      | Pause the current track.                                  |
| `/music resume`      | Resume the current track.                                  |
| `/music play <song>`| Add a new song to the music queue.                       |
| `/music queue`      | View the current music queue.                            |
| `/music repeat`     | Enable or disable repeating the current song.             |
| `/music skip`       | Skip to the next song, or clear the queue if it is the last song. |
| `/music stop`       | Stop the music and clear the queue.                      |
| Admin Commands:           |                                                                           |
| `/music reload`     | Reload the NoteSync Plugin                      |



## Minecraft Permissions
| Permission                     | Description                                                |
|--------------------------------|------------------------------------------------------------|
| `notesync.pause`               | Ability to pause the music.                                 |
| `notesync.join`                | Ability to invite the bot to the user's current voice channel. |
| `notesync.leave`               | Ability to kick the bot from its current voice channel.    |
| `notesync.link`                | Ability to use NoteSync's built-in user linking system.     |
| `notesync.play`                | Ability to add new songs to the music queue.               |
| `notesync.queue`               | Ability to view the in-game music queue GUI.               |
| `notesync.repeat`              | Ability to enable and disable the music repeating toggle.   |
| `notesync.resume`              | Ability to resume the music if it is currently paused.     |
| `notesync.skip`                | Ability to skip to the next song.                          |
| `notesync.stop`                | Ability to stop the music and clear the music queue.       |
| `notesync.notify`              | Users with this permission will get in-game music notifications. |
| `notesync.admin.reload`        | Ability to reload the NoteSync plugin.                     |
| `notesync.admin.updatenotify`  | Users with this permission will get notifications if the plugin is outdated. |
| `notesync.admin.*`             | Users with this permission have access to all NoteSync permissions. |


## PlaceholderAPI Placeholders
| Placeholder                     | Description | Return Example | 
|--------------------------------|-------------------------------|-----------------------------|
| `%notesync_isLinked%`               | Users linked status | true or false |
| `%notesync_discord_id%`                | Users discord account id | 456062221710131210 |
| `%notesync_discord_username%`               | Users discord account username    | ethanprimmer |
| `%notesync_nowPlaying%`                | Title of the current track     | Lil Nas X - Industry Baby  |
| `%notesync_nowPlaying_<size>%`                | The title of the current song, with a maximum character size               | Lil Nas X - Indust...| 

