Feature: Login Functionality
  As a user
  I want to login to the application
  So that I can access protected areas

  Scenario: Successful login with valid credentials
    Given I am on the login page
    When I login with username "tomsmith" and password "SuperSecretPassword!"
    Then I should see a message "You logged into a secure area!"

  Scenario: Failed login with invalid username
    Given I am on the login page
    When I login with username "invalidUser" and password "SuperSecretPassword!"
    Then I should see a message "Your username is invalid!"

  Scenario: Failed login with invalid password
    Given I am on the login page
    When I login with username "tomsmith" and password "invalidPassword"
    Then I should see a message "Your password is invalid!" 

  Scenario: Logout after successful login
    Given I am on the login page
    When I login with username "tomsmith" and password "SuperSecretPassword!"
    And I logout
    Then I should see a message "You logged out of the secure area!" 