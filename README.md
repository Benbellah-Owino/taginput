# sv

Everything you need to build a Svelte project, powered by [`sv`](https://github.com/sveltejs/cli).

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```bash
# create a new project in the current directory
npx sv create

# create a new project in my-app
npx sv create my-app
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://svelte.dev/docs/kit/adapters) for your target environment.


# PROGRAM DESCRIPTION
Create a dynamic text box feature where users can inject column values into their input by selecting column names from a dropdown menu. The feature will allow users to insert variables representing the values of table cells into the text. This functionality is essential for enabling our users to create prompts with embedded data for AI agents to process tasks.

### **Task Details:**

1. **Text Box with Command Recognition:**
    - Implement a text box where users can type freely.
    - When the user types a forward slash (`/`), a dropdown menu should appear displaying the **list of column names** from a given table.
2. **Dropdown Menu:**
    - Display the column names dynamically in the dropdown menu.
    - Ensure the dropdown is positioned correctly and appears as the user types `/`.
    - Users should be able to navigate the dropdown with a mouse or keyboard and select a column name.
3. **Injecting Variables into Text Box:**
    - When the user selects a column name, a **"chip" or tag** representing the column should appear in the text box (e.g., `[ColumnName]`).
    - The chip should be styled distinctively (e.g., a colored pill with text).
4. **Backend Representation:**
    - While the chip displays the column name visually, it should represent the **value of the corresponding cell** in the background (e.g., using a mapping or unique identifier).
    - For instance, if the user selects `FirstName` from the dropdown, the chip might show `[FirstName]`, but in the background, it should represent the **actual value of the cell** for `FirstName` in the current row of the table.
5. **Error Handling:**
    - Ensure graceful handling if the user types `/` but no columns are available.
    - Validate input to ensure chips represent only valid columns.
6. **Usability:**
    - Users should be able to continue typing or add multiple chips.
    - Allow chips to be deleted or replaced as needed.

### **Requirements:**

- Use **Svelte** for the implementation.
- The dropdown should dynamically fetch column names from a mock or static dataset provided by you.
- The chip representation should have both a visual element (column name) and a hidden background value (cell value).
- Ensure the feature is visually appealing and user-friendly.