// Utilities
import { defineStore } from 'pinia'
import { Services, createService } from '@/models'

interface State {
  services: Services[]
}

export const useAppStore = defineStore('app', {
  state: () => ({
    services: [
      createService("Argiloterapia", 24.99),
      createService("Ácido Hialurônico", 24.99),
      createService("Cuidados com a Pele", 24.99),
      createService("Fios de PDO", 24.99),
      createService("Limpeza Facial", 24.99),
      createService("Microagulhamento", 24.99),
      createService("Toxina Botulínica", 24.99),
    ]
  }) as State,
})
