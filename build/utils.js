var path = require('path')
var config = require('../config')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var glob = require('glob');


exports.assetsPath = function (_path) {
  var assetsSubDirectory = process.env.NODE_ENV === 'production'
    ? config.build.assetsSubDirectory
    : config.dev.assetsSubDirectory

  return path.posix.join(assetsSubDirectory, _path)
}

exports.cssLoaders = function (options) {
  options = options || {}

  var cssLoader = {
    loader: 'css-loader',
    options: {
      minimize: process.env.NODE_ENV === 'production',
      sourceMap: options.sourceMap
    }
  };
  var postcssLoader = {
    loader:'postcss-loader',
    options: {
      minimize: process.env.NODE_ENV === 'production',
      sourceMap: options.sourceMap
    }
  }

  // generate loader string to be used with extract text plugin
  function generateLoaders (loader, loaderOptions) {
    const loaders = options.usePostCSS ? [cssLoader, postcssLoader] : [cssLoader]
    if (loader) {
      loaders.push({
        loader: loader + '-loader',
        options: Object.assign({}, loaderOptions, {
          sourceMap: options.sourceMap
        })
      })
    }

    // Extract CSS when that option is specified
    // (which is the case during production build)
    if (options.extract) {
      return ExtractTextPlugin.extract({
        use: loaders,
        fallback: 'vue-style-loader',
        publicPath:'../../../../'
      })
    } else {
      return ['vue-style-loader'].concat(loaders)
    }
  }

  // http://vuejs.github.io/vue-loader/en/configurations/extract-css.html
  return {
    css: generateLoaders(),
    postcss: generateLoaders(),
    less: generateLoaders('less'),
    sass: generateLoaders('sass', { indentedSyntax: true }),
    scss: generateLoaders('sass'),
    stylus: generateLoaders('stylus'),
    styl: generateLoaders('stylus')
  }
}

// Generate loaders for standalone style files (outside of .vue)
exports.styleLoaders = function (options) {
  var output = []
  var loaders = exports.cssLoaders(options)
  for (var extension in loaders) {
    var loader = loaders[extension]
    output.push({
      test: new RegExp('\\.' + extension + '$'),
      use: loader
    })
  }
  return output
}


//???????????????????????????
exports.getMultiEntry = function (globPath) {
  var entries = {},
    basename, tmp, pathname;

  glob.sync(globPath).forEach(function (entry) {
    basename = path.basename(entry, path.extname(entry));
    tmp = entry.split('/').splice(-4);
	
	var pathsrc = tmp[0]+'/'+tmp[1];
	if( tmp[0] == 'src' ){
		pathsrc = tmp[1];
	}
	//console.log(pathsrc)
    pathname = pathsrc + '/' + basename; // ????????????js???html?????????
    entries[pathname] = entry;
    
    //console.log(pathname+'-----------'+entry);
    
  });
  
  return entries;
  
}


var fs = require( 'fs' ),
    copyStat = fs.stat;

/*
 * ?????????????????????????????????????????????
 * @param{ String } ?????????????????????
 * @param{ String } ????????????????????????
 */
var filecopy = function( src, dst ){
    // ??????????????????????????????/??????
    fs.readdir( src, function( err, paths ){
        if( err ){
            throw err;
        }
        paths.forEach(function( path ){
            var _src = src + '/' + path,
                _dst = dst + '/' + path,
                readable, writable;       
            copyStat( _src, function( err, st ){
                if( err ){
                    throw err;
                }
                // ?????????????????????
                if( st.isFile() ){
                    // ???????????????
                    readable = fs.createReadStream( _src );
                    // ???????????????
                    writable = fs.createWriteStream( _dst );   
                    // ????????????????????????
                    readable.pipe( writable );
                }
                // ????????????????????????????????????
                else if( st.isDirectory() ){
                    exports.startCopy( _src, _dst );
                }
            });
        });
    });
};

//????????????????????????????????????????????????????????????????????????????????????
exports.startCopy = function( src, dst ){
    fs.exists( dst, function( exists ){
        // ?????????
        if( exists ){
            filecopy( src, dst );
        }
        // ?????????
        else{
            fs.mkdir( dst, function(){
                filecopy( src, dst );
            });
        }
    });
};





