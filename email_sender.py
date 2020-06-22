import smtplib
import ssl
from email.message import EmailMessage


if __name__ == "__main__":

    gmail_user = 'covid19.eq.hackathon@gmail.com'
    gmail_password = 'N28z82WD'

    msg = EmailMessage()
    msg.set_content("Your scheduled time is in X minutes.")
    msg["Subject"] = "COVID19 Emergency Queue Alert"
    msg["From"] = gmail_user
    msg["To"] = 'alexaptib@gmail.com'

    context=ssl.create_default_context()

    with smtplib.SMTP("smtp.gmail.com", port=587) as smtp:
        smtp.starttls(context=context)
        smtp.login(msg["From"], gmail_password)
        smtp.send_message(msg)