'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _three = require('three');

var THREE = _interopRequireWildcard(_three);

var _ReactPropTypes = require('react/lib/ReactPropTypes');

var _ReactPropTypes2 = _interopRequireDefault(_ReactPropTypes);

var _MaterialDescriptorBase = require('./MaterialDescriptorBase');

var _MaterialDescriptorBase2 = _interopRequireDefault(_MaterialDescriptorBase);

var _propTypeInstanceOf = require('../../utils/propTypeInstanceOf');

var _propTypeInstanceOf2 = _interopRequireDefault(_propTypeInstanceOf);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MeshStandardMaterialDescriptor = function (_MaterialDescriptorBa) {
  _inherits(MeshStandardMaterialDescriptor, _MaterialDescriptorBa);

  function MeshStandardMaterialDescriptor(react3RendererInstance) {
    _classCallCheck(this, MeshStandardMaterialDescriptor);

    var _this = _possibleConstructorReturn(this, (MeshStandardMaterialDescriptor.__proto__ || Object.getPrototypeOf(MeshStandardMaterialDescriptor)).call(this, react3RendererInstance));

    _this.hasColor();
    _this.hasColor('emissive', 0x000000);
    _this.hasWireframe();

    ['roughness', 'metalness'].forEach(function (propName) {
      _this.hasProp(propName, {
        type: _ReactPropTypes2.default.number,
        simple: true,
        default: 0.5
      });
    });

    ['lightMapIntensity', 'aoMapIntensity', 'emissiveIntensity', 'bumpScale', 'displacementScale'].forEach(function (propName) {
      _this.hasProp(propName, {
        type: _ReactPropTypes2.default.number,
        update: function update(threeObject, propValue) {
          threeObject[propName] = propValue;
          threeObject.needsUpdate = true;
        },

        default: 1
      });
    });

    ['displacementBias'].forEach(function (propName) {
      _this.hasProp(propName, {
        type: _ReactPropTypes2.default.number,
        update: function update(threeObject, propValue) {
          threeObject[propName] = propValue;
          threeObject.needsUpdate = true;
        },

        default: 0
      });
    });

    ['refractionRatio'].forEach(function (propName) {
      _this.hasProp(propName, {
        type: _ReactPropTypes2.default.number,
        update: function update(threeObject, propValue) {
          threeObject[propName] = propValue;
          threeObject.needsUpdate = true;
        },

        default: 0.98
      });
    });

    _this.hasProp('normalScale', {
      type: (0, _propTypeInstanceOf2.default)(THREE.Vector2),
      update: function update(threeObject, normalScale) {
        threeObject.normalScale.copy(normalScale);
        threeObject.needsUpdate = true;
      },

      default: new THREE.Vector2(1, 1)
    });

    _this.hasProp('shading', {
      type: _ReactPropTypes2.default.oneOf([THREE.FlatShading, THREE.SmoothShading]),
      update: function update(threeObject, shading) {
        threeObject.shading = shading;
        threeObject.needsUpdate = true;
      },

      default: THREE.SmoothShading
    });

    ['skinning', 'morphTargets', 'morphNormals'].forEach(function (propName) {
      _this.hasProp(propName, {
        type: _ReactPropTypes2.default.bool,
        update: function update(threeObject, propValue) {
          threeObject[propName] = propValue;
          threeObject.needsUpdate = true;
        },

        default: false
      });
    });
    return _this;
  }

  _createClass(MeshStandardMaterialDescriptor, [{
    key: 'getMaterialDescription',
    value: function getMaterialDescription(props) {
      var materialDescription = _get(MeshStandardMaterialDescriptor.prototype.__proto__ || Object.getPrototypeOf(MeshStandardMaterialDescriptor.prototype), 'getMaterialDescription', this).call(this, props);

      ['roughness', 'metalness', 'lightMapIntensity', 'aoMapIntensity', 'emissiveIntensity', 'bumpScale', 'displacementScale', 'displacementBias', 'refractionRatio', 'normalScale', 'shading', 'skinning', 'morphTargets', 'morphNormals'].forEach(function (propName) {
        if (props.hasOwnProperty(propName)) {
          materialDescription[propName] = props[propName];
        }
      });

      return materialDescription;
    }
  }, {
    key: 'construct',
    value: function construct(props) {
      var materialDescription = this.getMaterialDescription(props);

      return new THREE.MeshStandardMaterial(materialDescription);
    }
  }]);

  return MeshStandardMaterialDescriptor;
}(_MaterialDescriptorBase2.default);

module.exports = MeshStandardMaterialDescriptor;