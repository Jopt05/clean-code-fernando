(() => {

    interface Product {
        id: number;
        name: string;
    }

    class ProductService {

        private httpAdapter: Object = {};

        getProduct( id: number ) {
            console.log('Producto: ', { id, name: 'OLET Tv' });
        }

        saveProduct( product: Product ) {
            console.log('Guardando en base de datos', product);
        }

    }

    class Mailer {

        private masterEmail: string = 'fernando@google.com';

        sendEmail( emailList: string[], template: 'to-clients' | 'to-admins' ) {
            console.log('Enviando correo a los clientes', template);
        }

    }

    class CartBloc {

        private itemsInCart: Object[] = [];

        addToCart( productId: number ) {
            console.log('Agregando carrito', productId);
        }

    }

    class ProductBloc {

        private productService: ProductService;
        private mailer: Mailer;

        constructor( productService: ProductService, mailer: Mailer ){
            this.productService = productService;
            this.mailer = mailer;
        }

        loadProduct( id: number ) {
            this.productService.getProduct( id );
        }

        saveProduct( product: Product ) {
            this.productService.saveProduct( product );
        }

        notifyClients( emailList: string[], template: 'to-clients' | 'to-admins' ) {
            this.mailer.sendEmail( emailList, template );
        }

    }

    const cartBloc = new CartBloc();
    const productService = new ProductService();
    const mailer = new Mailer();
    const productBloc = new ProductBloc( productService, mailer );

    productBloc.loadProduct(10);
    productBloc.saveProduct({ id: 10, name: 'OLET Tv' });
    productBloc.notifyClients(['jesus'], 'to-clients');
    cartBloc.addToCart(10);

})();