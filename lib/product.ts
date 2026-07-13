export interface InputField {
  key: string
  label: string
  type: 'input' | 'textarea' | 'select'
  placeholder?: string
  options?: string[]
}

export const PRODUCT = {
  "name": "InvoiceGen",
  "slug": "invoice-gen",
  "tagline": "Clean invoices for freelancers in seconds",
  "description": "Generate a ready-to-send invoice from a few fields - client, line items, and notes. Built for solo founders and freelancers who hate billing admin.",
  "toolTitle": "Create your invoice",
  "resultLabel": "Your invoice",
  "ctaLabel": "Generate invoice",
  "features": [
    "Client + line items",
    "Auto date + number",
    "Plain-HTML, copy anywhere",
    "No accounting login needed"
  ],
  "inputs": [
    {
      "key": "client",
      "label": "Client / Company",
      "type": "input",
      "placeholder": "e.g. Acme Studio LLC"
    },
    {
      "key": "items",
      "label": "Line items",
      "type": "textarea",
      "placeholder": "e.g. 1 x Design - $500\n2 x Revisions - $200"
    },
    {
      "key": "note",
      "label": "Note (optional)",
      "type": "textarea",
      "placeholder": "e.g. Thanks for the great project!"
    }
  ],
  "systemPrompt": "You are a freelance billing assistant. Given client name, line items, and an optional note, produce a clear invoice: bill-to, date, itemized lines with amounts, a total, and the note. Use plain language.",
  "pricing": [
    {
      "tier": "Free",
      "price": "$0",
      "desc": "3 invoices/month"
    },
    {
      "tier": "Starter",
      "price": "$9/mo",
      "desc": "Unlimited, PDF export"
    },
    {
      "tier": "Pro",
      "price": "$29/mo",
      "desc": "Branding, recurring, client portal"
    }
  ],
  mock: (inputs: Record<string, string>): string => {
  const client = inputs['client'] || 'Client Name'
  const items = inputs['items'] || '1 x Service - $500'
  const note = inputs['note'] || 'Thank you for your business.'
  const today = new Date().toISOString().slice(0, 10)
  return `# INVOICE
Bill to: ${client}
Date: ${today}
Invoice #: INV-${today.replace(/-/g, '')}

Items:
${items}

Note: ${note}

Total due: see line items above.
---
(Mock invoice. Add OPENAI_API_KEY for auto-calculated totals from line items.)`
  }
}
