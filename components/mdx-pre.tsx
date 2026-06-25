import { isValidElement, type ComponentProps, type ReactElement } from 'react'
import { MermaidDiagram } from './mermaid-diagram'

type CodeProps = { className?: string; children?: string }

export function MdxPre({ children, ...props }: ComponentProps<'pre'>) {
  if (isValidElement(children)) {
    const code = children as ReactElement<CodeProps>
    if (
      code.props?.className?.includes('language-mermaid') &&
      typeof code.props?.children === 'string'
    ) {
      return <MermaidDiagram chart={code.props.children} />
    }
  }
  return <pre {...props}>{children}</pre>
}
