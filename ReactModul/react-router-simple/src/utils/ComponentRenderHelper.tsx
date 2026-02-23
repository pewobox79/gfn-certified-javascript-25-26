export const RenderBlockComponents = (element: { __component: string, id: number }) => {

    const componentName = element['__component']
    const componentKey = element.id

    if (componentName === 'components.jumbotron') {
        return <h1 key={componentKey}>{componentName}</h1>
    }

    if (componentName === 'elements.reference-element') {
        return <h1 key={componentKey}>{componentName}</h1>
    }

    return <h1>no valid component</h1>
}