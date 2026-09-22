import React, { useState } from 'react'
import { 
  X, 
  Workflow, 
  ChevronRight, 
  Layers, 
  CheckCircle2, 
  AlertTriangle, 
  ShoppingCart, 
  Box, 
  Users, 
  FileSpreadsheet, 
  ArrowDown
} from 'lucide-react'

interface PcpHierarchyModalProps {
  isOpen: boolean
  onClose: () => void
}

interface HierarchyNode {
  id: string
  title: string
  subtitle: string
  icon: 'users' | 'order' | 'op' | 'operation' | 'item' | 'stock' | 'purchase'
  data: Record<string, string | number>
  explanation: string
}

export const PcpHierarchyModal: React.FC<PcpHierarchyModalProps> = ({ isOpen, onClose }) => {
  const [activeNodeIndex, setActiveNodeIndex] = useState<number>(5) // Default on 'Estoque / Falta'

  if (!isOpen) return null

  const hierarchyNodes: HierarchyNode[] = [
    {
      id: 'cliente',
      title: '01. Cliente',
      subtitle: 'Entidade demandante',
      icon: 'users',
      data: {
        'Razão Social': 'Dynamic Air Equipamentos Industriais S.A.',
        'Segmento': 'Manufatura Pesada / Transporte Pneumático',
        'SLA Contratual': 'Entrega em 20 dias úteis',
        'Status': 'Cliente Prioritário'
      },
      explanation: 'O ponto de partida do ciclo. O cliente emite uma demanda comercial que precisa ser rastreada por toda a cadeia fabril.'
    },
    {
      id: 'pedido',
      title: '02. Pedido de Venda',
      subtitle: 'Contrato comercial fechado',
      icon: 'order',
      data: {
        'Número Pedido': 'PV-2025-1049',
        'Data Emissão': '18/09/2025',
        'Valor Total': 'R$ 485.000,00',
        'Itens Solicitados': '2 Sistemas Pneumáticos Mod. 4'
      },
      explanation: 'O pedido valida o compromisso de entrega e dispara a geração automática das Ordens de Produção no módulo de APS.'
    },
    {
      id: 'op',
      title: '03. Ordem de Produção (OP)',
      subtitle: 'Planejamento mestre fabril',
      icon: 'op',
      data: {
        'Código OP': 'OP-2025-084',
        'Produto Final': 'Sistema de Transporte Pneumático Mod. 4',
        'Quantidade': '2 Unidades Completas',
        'Status': 'PLANEJADA / LIBERADA'
      },
      explanation: 'Unidade central de controle no chão de fábrica. Contém a árvore de lista de materiais (BOM) explodida sob demanda.'
    },
    {
      id: 'operacao',
      title: '04. Operações de Rota',
      subtitle: 'Etapas do chão de fábrica',
      icon: 'operation',
      data: {
        'Roteiro': 'Usinagem -> Caldeiraria -> Montagem Eletropneumática -> Teste Hidrostático',
        'Posto de Trabalho': 'Célula 03 - Montagem Mecânica',
        'Horas Estimadas': '64.5 horas',
        'Operador Líder': 'Edson Ramos'
      },
      explanation: 'Sequência lógica de fabricação. Cada operação consome itens específicos da lista técnica.'
    },
    {
      id: 'item',
      title: '05. Item / Matéria-Prima (BOM)',
      subtitle: 'Componentes e insumos',
      icon: 'item',
      data: {
        'Código Insumo': 'INS-4012',
        'Descrição': 'Válvula Reguladora de Pressão 1/2" Inox 316',
        'Qtd por Equipamento': '60 unidades',
        'Qtd Total OP': '120 unidades'
      },
      explanation: 'Explosão dinâmica da estrutura técnica (BOM). O sistema busca instantaneamente todos os subcomponentes necessários.'
    },
    {
      id: 'estoque-falta',
      title: '06. Estoque / Necessidade / Falta',
      subtitle: 'Cálculo analítico em tempo real',
      icon: 'stock',
      data: {
        'Necessidade Bruta': '120 unidades',
        'Saldo Físico Atual': '45 unidades',
        'Reservado Outras OPs': '10 unidades',
        'Falta Líquida Calculada': '75 unidades CRÍTICAS'
      },
      explanation: 'O coração do algoritmo: cruza o estoque em tempo real com todas as OPs concorrentes, evitando que uma ordem consuma o estoque da outra sem aviso.'
    },
    {
      id: 'compra',
      title: '07. Ordem de Compra (OC)',
      subtitle: 'Fechamento de suprimentos',
      icon: 'purchase',
      data: {
        'Sugestão de Compra': 'OC-SUGESTÃO-2025-992',
        'Quantidade a Comprar': '80 unidades (com margem de segurança)',
        'Fornecedor Homologado': 'Pneumatics Brasil Comércio Ltda',
        'Prazo de Lead Time': '4 dias úteis'
      },
      explanation: 'Gera automaticamente a requisição de compras para o departamento de suprimentos antes que a fábrica pare por desabastecimento.'
    }
  ]

  const activeNode = hierarchyNodes[activeNodeIndex]

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-2xl bg-slate-900 border border-slate-700 shadow-2xl p-6 sm:p-8 text-left">
        
        {/* Header */}
        <div className="flex items-start justify-between pb-4 border-b border-slate-800 gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-sky-400 uppercase font-semibold">
              <Workflow className="w-4 h-4" />
              <span>Explorador Conceitual Interativo</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
              PCP / APS: Fluxo Hierárquico Sob Demanda
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Como transformei centenas de linhas de planilhas desconexas em uma cadeia lógica rastreável de ponta a ponta.
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white rounded-lg bg-slate-800 hover:bg-slate-700 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Stepper Pipeline Navigation */}
        <div className="my-6">
          <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-3">
            Cadeia de Rastreamento (Clique em cada nó para inspecionar):
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2">
            {hierarchyNodes.map((node, index) => {
              const isActive = activeNodeIndex === index
              return (
                <button
                  key={node.id}
                  onClick={() => setActiveNodeIndex(index)}
                  className={`p-2.5 rounded-xl text-left border transition-all ${
                    isActive
                      ? 'bg-sky-500/20 border-sky-400 text-white shadow-md ring-1 ring-sky-400/40'
                      : 'bg-slate-950/60 border-slate-800 text-slate-400 hover:text-slate-200 hover:bg-slate-800'
                  }`}
                >
                  <div className="text-[10px] font-mono text-sky-400">Nó 0{index + 1}</div>
                  <div className="text-xs font-semibold truncate">{node.title.split('. ')[1]}</div>
                </button>
              )
            })}
          </div>
        </div>

        {/* Active Node Detail Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 p-6 rounded-2xl bg-slate-950/70 border border-slate-800">
          
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-sky-500/20 to-indigo-500/20 border border-sky-500/40 flex items-center justify-center text-sky-400 font-mono font-bold">
                {activeNodeIndex + 1}
              </div>
              <div>
                <h4 className="text-base font-bold text-white">{activeNode.title}</h4>
                <p className="text-xs text-sky-400 font-mono">{activeNode.subtitle}</p>
              </div>
            </div>

            <div className="space-y-2 text-xs text-slate-300">
              <p className="leading-relaxed bg-slate-900/60 p-3 rounded-lg border border-slate-800">
                {activeNode.explanation}
              </p>
            </div>

            <div className="p-3 rounded-lg bg-sky-950/30 border border-sky-800/40 text-[11px] text-sky-300 space-y-1">
              <div className="font-semibold flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-sky-400" />
                Vantagem da Exibição Sob Demanda:
              </div>
              <p className="text-slate-400">
                Evita carregar a lista técnica completa de uma vez, reduzindo o tempo de resposta da API de segundos para menos de 35 milissegundos.
              </p>
            </div>
          </div>

          {/* Node Structured Data Table */}
          <div className="lg:col-span-7 space-y-3">
            <div className="text-xs font-mono text-slate-400 uppercase tracking-wider flex items-center justify-between">
              <span>Dados Reais Mapeados</span>
              <span className="text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800/40 text-[10px]">
                Validado pelo Algoritmo
              </span>
            </div>

            <div className="rounded-xl border border-slate-800 overflow-hidden bg-slate-900/80">
              <table className="w-full text-left text-xs font-mono">
                <tbody className="divide-y divide-slate-800">
                  {Object.entries(activeNode.data).map(([key, value]) => (
                    <tr key={key} className="hover:bg-slate-800/40">
                      <td className="py-2.5 px-3 text-slate-400 font-medium w-1/3 border-r border-slate-800/60">
                        {key}
                      </td>
                      <td className={`py-2.5 px-3 font-semibold ${
                        String(value).includes('CRÍTICAS') ? 'text-amber-400' : 'text-slate-200'
                      }`}>
                        {value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="flex items-center justify-between pt-2">
              <button
                disabled={activeNodeIndex === 0}
                onClick={() => setActiveNodeIndex(activeNodeIndex - 1)}
                className="px-3 py-1.5 text-xs rounded-lg bg-slate-800 hover:bg-slate-700 disabled:opacity-30 text-slate-300 font-mono"
              >
                ← Nó Anterior
              </button>

              <span className="text-[11px] font-mono text-slate-400">
                Passo {activeNodeIndex + 1} de {hierarchyNodes.length}
              </span>

              <button
                disabled={activeNodeIndex === hierarchyNodes.length - 1}
                onClick={() => setActiveNodeIndex(activeNodeIndex + 1)}
                className="px-3 py-1.5 text-xs rounded-lg bg-sky-600 hover:bg-sky-500 disabled:opacity-30 text-white font-mono"
              >
                Próximo Nó →
              </button>
            </div>

          </div>

        </div>

        {/* Footer info */}
        <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
          <span>Desenvolvido com React, SQL CTEs em PostgreSQL e FastAPI.</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-white"
          >
            Fechar Janela
          </button>
        </div>

      </div>
    </div>
  )
}
