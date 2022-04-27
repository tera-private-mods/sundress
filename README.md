# sundress
***
A proof of concept TERA Toolbox module to view and wear costumes directly from the ingame Tikat shop. 

(Patch version 92.4 - Menma TERA)

https://user-images.githubusercontent.com/31943565/165643459-d43e2e4f-53f0-4d12-93ad-7f74013a2d86.mp4

***
# DISCLAIMER

## THIS MOD IS NOT DESIGNED OR INTENDED TO BE USED AS A REPLACEMENT FOR UNICAST. I WILL NOT ADD ANY FEATURES TO SAVE/LOAD COSTUMES.

## Usage

Once enabled, this mod allows you to preview costumes on your character directly from the Tikat shop.

## Installation

* Download this repository and place it in the `/mods/` subfolder of your TERA Toolbox installation.

## Commands

### All commands are prefixed by either 'c', 'sundress', 'dressup', or 'costumes'.

| Commands | Argument(s) | Example | Description |
| -------- | ----------- | ------- | ----------- |
| ['c', 'costumes', 'dressup', 'sundress'] | none | sundress | Toggles the module on/off. You can only preview costumes if the mod is enabled. (Off by default) |
| ['c', 'costumes', 'dressup', 'sundress'] | pick (arg) | slot (head, face, back, weapon, body) / all | Allows you to pick a costume for the specified slot. The argument 'all' allows you to select all costume slots at once. |
| ['c', 'costumes', 'dressup', 'sundress'] | debug | sundress debug | Toggles debug mode on/off. Currently, this just displays costume item id on mouse-over. |
| ['c', 'costumes', 'dressup', 'sundress'] | stop | sundress stop | Manually disables makeover mode at current slot. |
| ['c', 'costumes', 'dressup', 'sundress'] | commands | sundress commands | Prints every module command to your toolbox chat. |
| ['c', 'costumes', 'dressup', 'sundress'] | r | sundress r | Reloads the module. You shouldn't have to do this. |

***

## Q&A
| Question | Answer |
| -------- | ------ |
| Are you going to add [insert feature here]? (Costume saving/loading, persisting through relog/loading screens, etc...) | No. This is just a proof of concept mod I made for some friends and after seeing some people request the ability to preview costumes since the dressing room is currently disabled. |
| I broke this mod somehow! What do? | I'm sorry to hear that. Open an issue or something if you really care. If I have the time, I'll look into fixing it. This mod is not designed to be a replacement for Unicast. It was originally written to be used only by me or my friends, not as a public release. |
| This mod doesn't work on retail! | It's not supposed to. Currently, this mod only supports Patch 92, the patch that Menma TERA is on. |
| Will you really not add x? | I think having an actual costume economy is good for the game, and something like Unicast would ruin the server in the long run. Go farm your costumes like everyone else. | 
