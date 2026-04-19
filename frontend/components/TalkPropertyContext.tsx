'use client';

import { useEffect } from 'react';

/**
 * TalkPropertyContext — sets window.DASM_TALK so the DASM Talk widget opens
 * the conversation bound to this specific property instead of the generic
 * support fallback.
 *
 * The widget (talk.dasm.com.sa/widget.js) re-reads window.DASM_TALK on each
 * open and on the `dasm-talk:update` custom event, so SPA navigation between
 * property pages routes the user to the correct conversation without a full
 * page reload.
 *
 * mode "text+voice" enables the LiveKit voice room overlay (dasm-talk#10)
 * so a buyer can call the office from inside the chat panel — both join
 * the same room (room name = "property:{id}").
 *
 * role "participant" gives mic-publish capability without admin grants;
 * the server enforces it.
 */
export default function TalkPropertyContext({ propertyId }: { propertyId: string | number }) {
	useEffect(() => {
		const prev = (window as unknown as { DASM_TALK?: Record<string, unknown> }).DASM_TALK ?? {};
		(window as unknown as { DASM_TALK?: Record<string, unknown> }).DASM_TALK = {
			...prev,
			entity_type: 'property',
			entity_id: String(propertyId),
			mode: 'text+voice',
			role: 'participant',
		};
		window.dispatchEvent(new CustomEvent('dasm-talk:update'));

		return () => {
			const current =
				(window as unknown as { DASM_TALK?: Record<string, unknown> }).DASM_TALK ?? {};
			const { entity_type: _t, entity_id: _i, mode: _m, role: _r, ...rest } = current as {
				entity_type?: unknown;
				entity_id?: unknown;
				mode?: unknown;
				role?: unknown;
			};
			void _t;
			void _i;
			void _m;
			void _r;
			(window as unknown as { DASM_TALK?: Record<string, unknown> }).DASM_TALK = rest;
			window.dispatchEvent(new CustomEvent('dasm-talk:update'));
		};
	}, [propertyId]);

	return null;
}
