const template = require('./src/icons/template.js')

module.exports = {
  expandProps: 'end',
  template,
  svgoConfig: {
    multipass: true,
    plugins: [
      {
        addAttributesToSVGElement: false
      },
      {
        addClassesToSVGElement: false
      },
      {
        cleanupAttrs: true
      },
      {
        cleanupEnableBackground: true
      },
      {
        cleanupIDs: true
      },
      {
        cleanupListOfValues: {
          floatPrecision: 1
        }
      },
      {
        cleanupNumericValues: {
          floatPrecision: 1
        }
      },
      {
        collapseGroups: true
      },
      {
        convertColors: true
      },
      {
        convertPathData: true
      },
      {
        convertShapeToPath: true
      },
      {
        convertStyleToAttrs: true
      },
      {
        convertTransform: true
      },
      {
        mergePaths: true
      },
      {
        minifyStyles: true
      },
      {
        moveElemsAttrsToGroup: true
      },
      {
        moveGroupAttrsToElems: true
      },
      {
        removeAttrs: {
          attrs: '(stroke|fill|width|height)'
        }
      },
      {
        removeComments: true
      },
      {
        removeDesc: true
      },
      {
        removeDimensions: true
      },
      {
        removeDoctype: true
      },
      {
        removeEditorsNSData: true
      },
      {
        removeElementsByAttr: true
      },
      {
        removeEmptyAttrs: true
      },
      {
        removeEmptyContainers: true
      },
      {
        removeEmptyText: true
      },
      {
        removeHiddenElems: true
      },
      {
        removeMetadata: true
      },
      {
        removeNonInheritableGroupAttrs: true
      },
      'removeRasterImages',
      {
        removeStyleElement: true
      },
      {
        removeTitle: true
      },
      {
        removeUnknownsAndDefaults: true
      },
      {
        removeUnusedNS: true
      },
      {
        removeUselessDefs: true
      },
      {
        removeUselessStrokeAndFill: true
      },
      {
        removeViewBox: true
      },
      {
        removeXMLNS: false
      },
      {
        removeXMLProcInst: true
      },
      {
        sortAttrs: true
      },
      {
        transformsWithOnePath: {
          floatPrecision: 1
        }
      }
    ],
    js2svg: {
      pretty: true,
      indent: '  '
    }
  },
  svgProps: {
    fill: 'currentColor',
    viewBox: '0 0 16 16'
  }
}
