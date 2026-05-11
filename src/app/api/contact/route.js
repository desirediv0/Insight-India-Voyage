import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { firstName, lastName, email, phone, destination, travelDate, travelers, message } = await req.json();

    const transporter = nodemailer.createTransport({
      host: process.env.NEXT_PUBLIC_SMTP_HOST,
      port: process.env.NEXT_PUBLIC_SMTP_PORT,
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.NEXT_PUBLIC_SMTP_USER,
        pass: process.env.NEXT_PUBLIC_SMTP_PASSWORD,
      },
    });

    const fullName = `${firstName} ${lastName}`;

    // ── Admin Email Template ──
    const adminMailOptions = {
      from: `"Insight India Voyage Form" <${process.env.NEXT_PUBLIC_FROM_EMAIL}>`,
      to: process.env.NEXT_PUBLIC_TO_EMAIL,
      subject: `New Trip Inquiry: ${fullName} - ${destination}`,
      html: `
        <div style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 40px; border: 1px solid #f0f0f0; border-radius: 12px;">
          <div style="text-align: center; margin-bottom: 40px;">
            <h1 style="color: #0a0a0a; font-size: 24px; font-weight: 600; margin: 0;">New Inquiry Received</h1>
            <p style="color: #666; font-size: 14px; margin-top: 8px;">A new traveler wants to plan a journey</p>
          </div>
          
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #f5f5f5; color: #999; font-size: 13px; width: 140px;">Traveler Name</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #f5f5f5; color: #0a0a0a; font-size: 15px; font-weight: 500;">${fullName}</td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #f5f5f5; color: #999; font-size: 13px;">Email Address</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #f5f5f5; color: #0a0a0a; font-size: 15px; font-weight: 500;">${email}</td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #f5f5f5; color: #999; font-size: 13px;">Phone Number</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #f5f5f5; color: #0a0a0a; font-size: 15px; font-weight: 500;">${phone}</td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #f5f5f5; color: #999; font-size: 13px;">Destination</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #f5f5f5; color: #0a0a0a; font-size: 15px; font-weight: 500;">${destination}</td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #f5f5f5; color: #999; font-size: 13px;">Travel Date</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #f5f5f5; color: #0a0a0a; font-size: 15px; font-weight: 500;">${travelDate}</td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #f5f5f5; color: #999; font-size: 13px;">Travelers</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #f5f5f5; color: #0a0a0a; font-size: 15px; font-weight: 500;">${travelers}</td>
            </tr>
          </table>
          
          <div style="margin-top: 30px; padding: 20px; bg-color: #f9f9f9; border-radius: 8px;">
            <p style="color: #999; font-size: 12px; text-transform: uppercase; margin-bottom: 8px;">Message / Notes</p>
            <p style="color: #444; font-size: 14px; line-height: 1.6; margin: 0;">${message}</p>
          </div>
        </div>
      `,
    };

    // ── User Thank You Email Template ──
    const userMailOptions = {
      from: `"Insight India Voyage" <${process.env.NEXT_PUBLIC_FROM_EMAIL}>`,
      to: email,
      subject: `Thank you for choosing Insight India Voyage, ${firstName}!`,
      html: `
        <div style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.05); border: 1px solid #eeeeee;">
          <div style="background-color: #0a0a0a; padding: 40px; text-align: center;">
            <h1 style="color: #ffffff; font-size: 28px; margin: 0; font-weight: 600; letter-spacing: -0.02em;">Namaste, ${firstName}</h1>
            <p style="color: rgba(255,255,255,0.6); font-size: 16px; margin-top: 10px;">Your journey to India begins here.</p>
          </div>
          
          <div style="padding: 40px; text-align: center;">
            <p style="color: #444; font-size: 16px; line-height: 1.7; margin-bottom: 30px;">
              Thank you for reaching out to **Insight India Voyage**. We have received your inquiry for a trip to **${destination}** and our travel experts are already working on crafting something extraordinary for you.
            </p>
            
            <div style="display: inline-block; padding: 15px 30px; border: 1px solid #e0e0e0; border-radius: 50px; color: #0a0a0a; font-size: 14px; font-weight: 500; margin-bottom: 30px;">
              Estimated Response Time: Within 24 Hours
            </div>
            
            <p style="color: #888; font-size: 14px; line-height: 1.6; margin-bottom: 40px;">
              While you wait, feel free to explore our curated destinations or follow our stories on social media. We can't wait to show you the beauty of India.
            </p>
            
            <div style="border-top: 1px solid #f0f0f0; pt-30px; margin-top: 40px;">
              <p style="color: #0a0a0a; font-size: 14px; font-weight: 600; margin-bottom: 5px;">Best Regards,</p>
              <p style="color: #999; font-size: 13px; margin: 0;">The Insight India Voyage Team</p>
            </div>
          </div>
          
          <div style="background-color: #fcfcfc; padding: 20px; text-align: center; border-top: 1px solid #f5f5f5;">
            <p style="color: #bbb; font-size: 11px; margin: 0;">Insight India Voyage | Dwarka, New Delhi, India</p>
          </div>
        </div>
      `,
    };

    // Send both emails
    await transporter.sendMail(adminMailOptions);
    await transporter.sendMail(userMailOptions);

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error("Email Error:", error);
    return new Response(JSON.stringify({ error: "Failed to send email" }), { status: 500 });
  }
}
