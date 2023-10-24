describe('This spec will be used to test the ATM search functionality', () => {
    
    //1. Open https://www.hsbc.co.in/
    beforeEach(() => {
      cy.visit('https://www.hsbc.co.in/')
    })
   
    it('Validated the ATM search', () => {

    //2. Hover cursor on Banking menu navigation
     cy.xpath('//button[@class="header-sidebar-trigger"]').click()
     
     //3. Click on Credit Cards link
     cy.xpath('//h2[@class="doormat-heading"][normalize-space()="Credit Cards"]').click()

     //4. Validate Credit Card as a header text
     cy.xpath('//*[@id="listing_intro_hero_banner_2"]/div/h1').contains('Credit cards')

     //5. Validate Apply Now button
    cy.xpath('//*[@id="listing_intro_button_1"]').should('exist')


    })
})