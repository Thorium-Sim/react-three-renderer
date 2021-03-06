'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _three = require('three');

var THREE = _interopRequireWildcard(_three);

var _ReactPropTypes = require('react/lib/ReactPropTypes');

var _ReactPropTypes2 = _interopRequireDefault(_ReactPropTypes);

var _MaterialDescriptorBase = require('./MaterialDescriptorBase');

var _MaterialDescriptorBase2 = _interopRequireDefault(_MaterialDescriptorBase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LineDashedMaterialDescriptor = function (_MaterialDescriptorBa) {
  _inherits(LineDashedMaterialDescriptor, _MaterialDescriptorBa);

  function LineDashedMaterialDescriptor(react3RendererInstance) {
    _classCallCheck(this, LineDashedMaterialDescriptor);

    var _this = _possibleConstructorReturn(this, (LineDashedMaterialDescriptor.__proto__ || Object.getPrototypeOf(LineDashedMaterialDescriptor)).call(this, react3RendererInstance));

    _this.hasColor();

    ['linewidth', 'scale', 'gapSize'].forEach(function (propName) {
      _this.hasProp(propName, {
        type: _ReactPropTypes2.default.number,
        simple: true,
        default: 1
      });
    });

    _this.hasProp('dashSize', {
      type: _ReactPropTypes2.default.number,
      simple: true,
      default: 3
    });

    // what are these properties used for?
    ['linecap', 'linejoin'].forEach(function (propName) {
      _this.hasProp(propName, {
        type: _ReactPropTypes2.default.oneOf(['round']),
        simple: true,
        default: 'round'
      });
    });

    _this.hasProp('vertexColors', {
      type: _ReactPropTypes2.default.oneOf([THREE.NoColors, THREE.FaceColors, THREE.VertexColors]),
      simple: true,
      default: THREE.NoColors
    });

    _this.hasProp('fog', {
      type: _ReactPropTypes2.default.bool,
      update: function update(threeObject, fog, existsInProps) {
        if (existsInProps) {
          threeObject.fog = fog;
        }
        threeObject.needsUpdate = true;
      },

      updateInitial: true,
      default: true
    });
    return _this;
  }

  _createClass(LineDashedMaterialDescriptor, [{
    key: 'construct',
    value: function construct(props) {
      var materialDescription = this.getMaterialDescription(props);

      return new THREE.LineDashedMaterial(materialDescription);
    }
  }]);

  return LineDashedMaterialDescriptor;
}(_MaterialDescriptorBase2.default);

module.exports = LineDashedMaterialDescriptor;