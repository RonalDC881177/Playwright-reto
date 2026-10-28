import { test } from '@playwright/test';

// page = fixture 
test('login sauce demo', async ({ page }) => {

    // ir a la pagina deseada
    await page.goto('https://www.saucedemo.com/')

    /***
     * Localizar el elemento con el que desea interactuar
     * texbox, button, link, dropdown, checkbox, radio button, etc
     * selecciono la accion que se quiere realizar con un punto y la funcion click, fill, selectOption, check, uncheck, etc
     */
    await page.getByRole('textbox', { name: 'Username'}).fill('standard_user')
    await page.getByRole('textbox', { name: 'Password'}).fill('secret_sauce')
    await page.getByRole('button', { name: 'Login'}).click()
})