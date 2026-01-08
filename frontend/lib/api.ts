export type LeadPayload = {
	name: string;
	email: string;
	phone?: string;
	type?: 'seller' | 'buyer';
	message?: string;
};

const baseUrl =
	process.env.NEXT_PUBLIC_API_BASE_URL?.replace(/\/+$/, '') || 'http://127.0.0.1:8000';

export async function createLead(payload: LeadPayload) {
	const res = await fetch(`${baseUrl}/api/leads`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(payload),
		cache: 'no-store'
	});
	if (!res.ok) {
		const text = await res.text().catch(() => '');
		throw new Error(`Lead create failed (${res.status}): ${text}`);
	}
	return res.json();
}


