$contact = Get-Content -Raw -Encoding UTF8 src\pages\ContactPage.tsx
$contact = $contact -replace '(?s)const whatsappInquiryUrl = `https://wa\.me/919876543210\?text=\$\{encodeURIComponent\([\s\S]*?\)\}`', '  const divider = ''\u2501''.repeat(26);
  const whatsappInquiryUrl = `https://wa.me/919876543210?text=${encodeURIComponent(
    `${divider}\n` +
    `       \u{1F690} *TRAVEL ENQUIRY* \u{1F334}\n` +
    `${divider}\n\n` +
    `\u{1F464} *Customer Details*\n\n` +
    `*Name*       : ${name || ''Customer''}\n` +
    `*Phone*      : ${phone}\n\n` +
    `\u{1F6E3}\u{FE0F} *Journey Details*\n\n` +
    `*Vehicle*    : ${vehicle || ''Not Selected''}\n` +
    `*Passengers* : ${passengers || ''Not Specified''}\n` +
    `*Date*       : ${travelDate}\n\n` +
    `\u{1F4CD} *Pickup*     : ${pickup || ''Not Specified''}\n` +
    `\u{1F3C1} *Destination*: ${destination || ''Not Specified''}\n\n` +
    `\u{1F4DD} *Additional Requirements:*\n` +
    `${message || ''None''}\n\n` +
    `${divider}\n` +
    `Generated from:\n` +
    `*Prayana Travels* \u{2728}`
  )}`'
Set-Content -Path src\pages\ContactPage.tsx -Value $contact -Encoding UTF8

$booking = Get-Content -Raw -Encoding UTF8 src\pages\BookingPage.tsx
$booking = $booking -replace '(?s)const whatsappMessage = `[\s\S]+?Prayana Travels\* \\u\{2728\}`;', '  const divider = ''\u2501''.repeat(26);
  const whatsappMessage = `${divider}\n` +
    `       \u{1F690} *TRAVEL ENQUIRY* \u{1F334}\n` +
    `${divider}\n\n` +
    `\u{1F464} *Customer Details*\n\n` +
    `*Name*       : ${name || ''Customer''}\n` +
    `*Phone*      : ${phone}\n\n` +
    `\u{1F6E3}\u{FE0F} *Journey Details*\n\n` +
    `*Vehicle*    : ${selectedVehicle || ''Not Selected''}\n` +
    `*Passengers* : ${passengers || ''Not Specified''}\n` +
    `*Type*       : ${journeyType}\n` +
    `*Date*       : ${travelDate}${travelTime ? ` at ${travelTime}` : ''''}\n` +
    `*Duration*   : ${tripDuration || ''N/A''}\n\n` +
    `\u{1F4CD} *Pickup*     : ${pickup || ''Not Specified''}\n` +
    `\u{1F3C1} *Destination*: ${destination || ''Not Specified''}\n\n` +
    `\u{1F4DD} *Additional Requirements:*\n` +
    `${specialNotes || ''None''}\n\n` +
    `${divider}\n` +
    `Generated from:\n` +
    `*Prayana Travels* \u{2728}`;'
Set-Content -Path src\pages\BookingPage.tsx -Value $booking -Encoding UTF8
