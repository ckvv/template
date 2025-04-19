import type { Component, Plugin } from 'vue';

export function create({ components }: { components?: Component[] | Record<string, Component> }): Plugin {
  return (app) => {
    if (components) {
      (Array.isArray(components) ? components : Object.values(components)).forEach((compoent) => {
        if (compoent?.name) {
          app.component(`${compoent.name}`, compoent);
        }
      });
    }
  };
}
