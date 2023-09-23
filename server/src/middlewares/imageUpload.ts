import multer from 'multer';
import path from 'path';

const storage = multer.diskStorage({
    destination: path.join(__dirname, '../../uploads'),
    filename: (req: any, file: any, cb: any) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
    },
});

const upload = multer({ storage });