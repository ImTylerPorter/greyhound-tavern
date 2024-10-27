import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import dotenv from 'dotenv';
import { resolve } from 'path';

dotenv.config();

export default defineConfig({
	plugins: [sveltekit()],
	define: {
		'process.env.VITE_SUPABASE_URL': JSON.stringify(process.env.VITE_SUPABASE_URL),
		'process.env.VITE_SUPABASE_ANON_KEY': JSON.stringify(process.env.VITE_SUPABASE_ANON_KEY)
	},
	resolve: {
		alias: {
			$api: resolve(__dirname, './src/api')
		}
	}
});
