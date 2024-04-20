# Features that could be implemented:

## My Perks
- This will be a collection of perks that you have selected for your character.
- Each perk in the main list should have an "add to My Perks" button
    - When clicked, this perk will be moved to the My Perks page
- Similarly, each perk in the My Perks list should have a "remove from My Perks" button
    - This can operate in the same way as adding and removing 'todo' tasks from 'daily-planner' project
- This information should be stored in the local storage

## Dark Mode
- A switch that gives the web app a darker theme
    - A button
        - When pressed, activate an onclick()
            - querySelector all the tags that have a strong amount of colour on the screen
            - apply a class to these tags
            - the class has darker colours