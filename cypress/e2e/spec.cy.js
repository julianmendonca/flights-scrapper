describe('Despegar.com', () => {
	it('From buenos aires to madrid', () => {
		cy.visit('https://www.despegar.com.ar/shop/flights/results/roundtrip/BUE/MAD/2023-09-01/2023-11-21/1/0/0/NA/NA/NA/NA/NA?from=SB&di=1-0')
		cy.contains('Entend').click()
		cy.get('#refine-bar-position').invoke('remove');
		cy.get('#splash-button-position').invoke('remove');
		cy.wait(10000)
		cy.scrollTo('bottom')
		cy.wait(15000)
		// cy.get('.health-safety-protocol-modal').invoke('remove');
		cy.get("body").then($body => {
			if ($body.find(".health-safety-protocol-modal").length > 0) {
				cy.get('.health-safety-protocol-modal').invoke('remove');
			}
			cy.get('.eva-3-icon-close').eq(3).click()
			cy.screenshot()
		});

		// const container = cy.get('.itineraries-container').eq()
		// const fromDate = container.querySelector('.route-type-date').innerText
		// const toDate = container.querySelector('.route-info-item-date')
	})
})