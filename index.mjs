import puppeteer from 'puppeteer';
import secrets from './secrets.mjs';

async function run() {
	const browser = await puppeteer.launch({ headless: false, slowMo: 20 });
	const page = (await browser.pages())[0];
	await page.goto('https://moje.o2.cz/login//loginOneTime');
	await page.focus('#userLogin');
	await page.keyboard.type(secrets.phoneNumber);
	await page.click('#submitButton');
	await page.waitForNavigation(); // https://moje.o2.cz/login/loginOneTimeOtp
	// Let the user type in the OTP code.
	await page.waitForSelector('#connectionTiles');
	// TODO: Click the service info button
	// TODO: Download the invoices
	await browser.close();
}

run();
