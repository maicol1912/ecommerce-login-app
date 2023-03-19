import { Category } from './src/models/category';
import express, { Application } from "express"
import cors from "cors"
import dotenv from "dotenv";
import morgan from "morgan"
import routerProduct from "./src/routes/product.routes"
import routerUser from "./src/routes/user.routes"
import routerValidation from "./src/routes/validate-token.routes"
import routerCategory from "./src/routes/category.routes"
import { Product } from "./src/models/product"
import { User } from "./src/models/user"
import sequelize from "./src/db/connection";
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
        this.app.use('/api/categories', routerCategory);
        this.app.use('/api/validate', routerValidation);
    }

    midlewares() {
        this.app.use(morgan('dev'))
        this.app.use(express.json());
        this.app.use(cors());
    }

    async dbConnect() {
        try {
            sequelize
            await User.sync({alter:true})
            await Category.sync({alter:true})
            await Product.sync({alter:true})
            console.log("database conected")
        } catch (error) {
            console.error('Unable to connect to the database:', error);
        }
    }
}

export default App;