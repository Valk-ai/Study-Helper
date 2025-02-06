from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.select import Select
import time
import requests

PATH = r".\chromedriver-win64.exe"

driver = webdriver.Firefox()
driver.get("https://ocr.org.uk/qualifications/past-paper-finder/")

print(driver.title)

# Select A and AS-Levels from the options
select_element = driver.find_element(By.ID, "pp-qual-type")
select = Select(select_element)
select.select_by_value("3863")

# Selects Computer Science from the options
select_element = driver.find_element(By.ID, "pp-qual")
select = Select(select_element)
select.select_by_value("168479")

# Selects A-Level from the options
select_element = driver.find_element(By.ID, "pp-level")
select = Select(select_element)
select.select_by_value("383897")

time.sleep(7)

select_element = driver.find_element(By.ID, "ui-id-1")
select_element.click()

select_element = driver.find_element(By.ID, "ui-id-2")
select_element = select_element.find_element(By.XPATH, "//h4[1]")
select_element.click()

select_element = driver.find_element(By.CLASS_NAME, "resource-list")
select_element = select_element.find_element(By.XPATH, "//href[1]")
select_element.click()

time.sleep(4)
driver.quit()