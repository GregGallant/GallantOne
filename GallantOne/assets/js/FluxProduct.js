var React = require('react');
var FluxCartActions = require('./FluxCartActions');

var FluxProduct = React.createClass({displayName: "FluxProduct",

    addToCart: function(event) {
        var sku = this.props.selected.sku;
        var update = {
            name: this.props.product.name,
            type: this.props.selected.type,
            price: this.props.selected.price
        };
        FluxCartActions.addToCart(sku, update);
        FluxCartActions.updateCartVisible(true);
    },

    selectVariant: function(event) {
        FluxCartActions.selectProduct(event.target.value);
    },

    render: function() {
        var ats = (this.props.selected.sku in this.props.cartitems) ?
            this.props.selected.inventory - this.props.cartitems[this.props.selected.sku].quantity :
            this.props.selected.inventory;

        return (

            React.createElement("div", {className: "flux-product"}, 
                React.createElement("img", {src: 'assets/images/' + this.props.product.image}), 
                React.createElement("div", {className: "flux-product-detail"}, 
                    React.createElement("h3", null, this.props.product.name), 
                    React.createElement("h4", null, this.props.product.description), 
                    React.createElement("h5", null, this.props.selected.price), 
                    React.createElement("select", {onChange: this.selectVariant}, 
                        this.props.product.variants.map(function(variant, index) {
                            return (
                                React.createElement("option", {key: index, value: index}, variant.type)
                            )
                        })
                    ), 
                    React.createElement("button", {type: "button", onClick: this.addToCart, disabled: ats > 0 ? '' : 'disabled'}, 
                        ats > 0 ? 'Add To Cart' : 'Sold Out'
                    )
                )
            )

        );
    }

});

module.exports = FluxProduct;