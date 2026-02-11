import type { ComponentResolver } from 'unplugin-vue-components/types'
// import { name } from '../package.json'

interface ResolverOptions {
  importStyle?: boolean
}

const prefix = name.slice(0, name.indexOf('-'))
export function Resolver(options: ResolverOptions = {}): ComponentResolver[] {
  return [{
    type: 'component',
    resolve: (name: string) => {
      if (!name.match(new RegExp(`^${prefix}[A-Z]`)))
        return
      const importName = name.slice(prefix.length)
      const importPath = `${name}/components/${importName}`
      return {
        name: importName,
        from: importPath,
        sideEffects: options.importStyle ? `${importPath}.css` : undefined,
      }
    },
  }]
}
