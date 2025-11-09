export const resetPasswordTemplate = (name, otp) => `
  <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #f4f6f8; color: #333;">
    <div style="max-width: 500px; margin: auto; background: #fff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 6px rgba(0,0,0,0.1);">
      <div style="background-color: #007bff; color: #fff; padding: 16px; text-align: center;">
        <h2>Password Reset Request</h2>
      </div>
      <div style="padding: 20px;">
        <p>Hi <strong>${name}</strong>,</p>
        <p>We received a request to reset your account password. Use the following One-Time Password (OTP) to complete the process:</p>
        <h2 style="text-align:center; color:#007bff; letter-spacing: 4px;">${otp}</h2>
        <p>This OTP will expire in <strong>15 minutes</strong>.</p>
        <p>If you did not request a password reset, please ignore this email or contact support if you’re concerned about your account’s security.</p>
        <p style="margin-top: 24px;">Best regards,<br><strong>The Support Team</strong></p>
      </div>
      <div style="background-color: #f4f6f8; text-align: center; padding: 10px; font-size: 12px; color: #777;">
        © ${new Date().getFullYear()} Ecommerce Team. All rights reserved.
      </div>
    </div>
  </div>
  `;
