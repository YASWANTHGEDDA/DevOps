from selenium import webdriver
from selenium.webdriver.common.by import By
import time
test_case = [
    {
        "num1": "7.8",
        "num2": "13"
    },
    {
        "num1": "7",
        "num2": "13.5"
    }
]
driver = webdriver.Chrome()
driver.get("D:\\DEVOPS\\Js_Testing\\add.html")

for test in test_case:
    driver.refresh()

    driver.find_element(By.ID,"num1").send_keys(test["num1"])
    driver.find_element(By.ID,"num2").send_keys(test["num2"])

    driver.find_element(By.CSS_SELECTOR, "button[type='button']").click()
    time.sleep(3)
    res = driver.find_element(By.ID,"res").text
    print(res)
driver.quit()