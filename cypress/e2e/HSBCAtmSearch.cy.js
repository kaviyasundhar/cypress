describe('This spec will be used to test the ATM search functionality', () => {
    
    //1. Open https://www.hsbc.co.in/
    beforeEach(() => {
      cy.visit('https://www.hsbc.co.in/')
    })
   
    it('Validated the ATM search', () => {

    // 2. Scroll down to the bottom of the page
    // 3. Click on Find your nearest branch or ATM link in footer section 
    cy.xpath("//footer//a[contains(text(),'Find your')]").click()

    //4. Validate in new page the URL has String = ‘/ways-to-bank/branches/’
    cy.url().should('include', '/ways-to-bank/branches/')

    //5. Validate Header as Branches & ATM
    cy.xpath("//h1").contains("Branches & ATMs")

    //6. Click on before Branch & ATM Locator button
    cy.xpath("//span[text()='Branch & ATM Locator']").click()

    //7. Type country name as India
    cy.xpath("//input[@id='searchInput']").type('India')

    //8. In drop-down option click option India
    cy.xpath("//input[@value='India']").type('{enter}')
    
    //9. Validate ATM Header name is showing as Rajbhavan Road
    cy.xpath("//h2[text()='Rajbhavan Road']").should('exist')

   //10. Click on add Show more results button
   cy.xpath("//button[contains(text(),'Show more results')]").should('exist').click()
  
   //11. Check second ATM branch name tooltip as 2 in red color is getting displayed
   cy.xpath('//button[@class="jAgR1vyHAyAVW7gdvNl5r"]/p[1]/span/span[text()="2"]').should('exist').click()
   
   //12. Check Instagram in social media option in footer section
   cy.xpath("//a[@id='content_socialmediafooterlink_1']").should('be.visible')

   //13. Check Facebook in social media option in footer section
   cy.xpath("//a[@id='content_socialmediafooterlink_2']").should('be.visible')

   //14. Check Twitter in social media option in footer section
   cy.xpath("//a[@id='content_socialmediafooterlink_3']").should('be.visible')

   //15. Check Youtube in social media option in footer section
   cy.xpath("//a[@id='content_socialmediafooterlink_4']").should('be.visible');

   //16. Click on HSBC Logo
   cy.xpath("//div[@class='header-logo lg-2']//a").click()

   //17. Validate page is navigating to home page by its title
   cy.url().should('include', '//www.hsbc.co.in/')

   //18. Scroll down to the bottom & Check and Click on Privacy link
   cy.xpath("//div[@class='footer-bottom']//li[3]").click()
   
   //20. Validate Privacy Statement as Header
   cy.xpath("//h1").contains("Privacy Statement")

  })
})