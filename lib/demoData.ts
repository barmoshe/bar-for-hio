/**
 * Scripted data for the inbox demo. No network, no LLM: the "AI" is a typed-out
 * canned draft. The point is to show HiO's product loop (unify -> prioritize ->
 * draft in the owner's voice -> one tap to approve), not to call a real model.
 *
 * The demo business is a small bakery, "Stone & Crumb", run by one owner.
 */

export type Channel = "instagram" | "whatsapp" | "email" | "facebook";
export type Urgency = "high" | "medium" | "low";

export type Conversation = {
  id: string;
  channel: Channel;
  customer: string;
  /** Handle or address shown under the name. */
  handle: string;
  timeAgo: string;
  urgency: Urgency;
  /** Short chip the AI assigns: why this rose to the top. */
  tag: string;
  /** The inbound customer message. */
  incoming: string;
  /** One line on what HiO noticed (memory, urgency, opportunity). */
  signal: string;
  /** The reply HiO drafts, in the owner's voice. */
  draft: string;
};

export const CHANNEL_LABEL: Record<Channel, string> = {
  instagram: "Instagram",
  whatsapp: "WhatsApp",
  email: "Email",
  facebook: "Facebook",
};

/** Sorted high -> low so the demo opens already triaged, like HiO does. */
export const conversations: Conversation[] = [
  {
    id: "c1",
    channel: "instagram",
    customer: "Dana R.",
    handle: "@dana.bakes",
    timeAgo: "4m",
    urgency: "high",
    tag: "Frustrated",
    incoming:
      "My order was supposed to arrive this morning for my daughter's party and it's still not here. The party starts at 2. Please help.",
    signal:
      "Angry tone + time pressure. Pulled order #4821 (sourdough + 2 dozen cookies, out for delivery, ETA 12:40).",
    draft:
      "Hi Dana, I'm so sorry for the worry. I just checked: order #4821 is out for delivery and the driver's ETA is 12:40, so it'll be there well before 2. I'll text you the moment it's dropped. Thank you for your patience, and I hope the party is wonderful.",
  },
  {
    id: "c2",
    channel: "whatsapp",
    customer: "Marcus Lee",
    handle: "+1 (415) 555 0148",
    timeAgo: "11m",
    urgency: "high",
    tag: "Hot lead",
    incoming:
      "Hey, do you do corporate orders? We need about 120 pastries delivered to our office every Friday morning.",
    signal:
      "New number, high-value recurring lead (120/week). No order history. Worth a fast, warm reply.",
    draft:
      "Hi Marcus, yes, we love standing orders like this. 120 pastries every Friday is no problem, and I can set up a rotating mix so it doesn't get repetitive. Want me to put together a quick weekly quote and a sample box for your team to try first?",
  },
  {
    id: "c3",
    channel: "email",
    customer: "Priya N.",
    handle: "priya.n@gmail.com",
    timeAgo: "32m",
    urgency: "medium",
    tag: "Regular",
    incoming:
      "Hi! Is the gluten-free banana bread back in stock yet? I get it every week and missed it last Saturday.",
    signal:
      "Repeat customer (7 orders, always the GF banana bread). It's back in stock today.",
    draft:
      "Hi Priya! Good timing, the gluten-free banana bread is back on the shelf as of this morning. I set one aside with your name on it so you don't miss it again this week. See you Saturday?",
  },
  {
    id: "c4",
    channel: "facebook",
    customer: "Tom B.",
    handle: "Tom Bauer",
    timeAgo: "1h",
    urgency: "medium",
    tag: "Question",
    incoming:
      "What are your hours on the holiday weekend? Want to swing by Sunday.",
    signal:
      "Simple FAQ. Answer is in your saved business hours: Sun 8-2 on the holiday weekend.",
    draft:
      "Hi Tom! We'll be open Sunday from 8 to 2 over the holiday weekend. Come hungry, the cinnamon rolls go fast. See you then!",
  },
  {
    id: "c5",
    channel: "instagram",
    customer: "Lena K.",
    handle: "@lenakdesign",
    timeAgo: "2h",
    urgency: "low",
    tag: "Kind word",
    incoming:
      "Just wanted to say the wedding cake was perfect. Everyone asked who made it 🤍",
    signal:
      "Positive review opportunity. A warm thank-you plus a gentle nudge to share goes a long way.",
    draft:
      "Lena, this just made my whole week, thank you. It was an honor to be part of your day. If you ever feel like leaving a few words on our page, it really helps a small bakery like ours. Wishing you both all the best.",
  },
];
