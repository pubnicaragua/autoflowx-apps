// Tipos de moneda para los países de Centroamérica
export type CurrencyCode = "USD" | "GTQ" | "HNL" | "NIO" | "CRC" | "PAB" | "SVC" | "BZD"

export type Currency = {
  code: CurrencyCode
  name: string
  symbol: string
  exchangeRate: number // Tasa de cambio con respecto al dólar
}

// Tipo para imágenes
export type AppImage = {
  id: string
  uri: string
  type: "vehicle" | "damage" | "repair" | "invoice" | "insurance" | "other"
  description?: string
  createdAt: string
}

// Tipo para comentarios y notas
export type Comment = {
  id: string
  userId: string
  userName: string
  text: string
  createdAt: string
  type: "client" | "technician" | "insurance" | "system"
}

// Tipo para respuestas de aseguradoras
export type InsuranceResponse = {
  id: string
  insuranceCompany: string
  policyNumber?: string
  claimNumber?: string
  approved: boolean
  approvedAmount?: number
  comments: string
  responseDate: string
  documents?: AppImage[]
}

// Tipo para procesos de reparación
export type RepairProcess = {
  id: string
  name: string
  description: string
  startDate?: string
  endDate?: string
  status: "pending" | "in_progress" | "completed" | "cancelled"
  technicianId: string
  technicianName: string
  images?: AppImage[]
  notes?: string
}

// Tipo para configuración de la empresa
export type CompanySettings = {
  name: string
  logo?: string
  address?: string
  phone?: string
  email?: string
  website?: string
  taxId?: string
  defaultCurrency: CurrencyCode
  showPricesWithTax: boolean
  taxRate: number
  termsAndConditions?: string
  invoiceFooter?: string
  invoiceNotes?: string
}
