import express, { Application } from "express"
import cors from "cors"
import dotenv from "dotenv"
import routerProduct from "./src/routes/product.routes"
import routerUser from "./src/routes/user.routes"
import { Product } from "./src/models/product"
import { User } from "./src/models/user"
class App {
    private app: Application;
    private port: string;

    constructor() {
        dotenv.config()
        this.app = express();
        this.port = process.env.PORT || '3001';
        this.listen();
        this.midlewares();
        this.routes();
        this.dbConnect();
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Server initialized in port: ${this.port}`);
        })
    }

    routes() {
        this.app.use('/api/products', routerProduct);
        this.app.use('/api/users', routerUser);
    }

    midlewares() {
        // Parseo body
        this.app.use(express.json());

        // Cors
        this.app.use(cors());
    }

    async dbConnect() {
        try {
            await Product.sync()
            await User.sync()
        } catch (error) {
            console.error('Unable to connect to the database:', error);
        }
    }
}

export default App;