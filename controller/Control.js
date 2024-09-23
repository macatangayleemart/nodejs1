const ml = {
    lee: (req, res)=>{
        res.render('index');
    },
    mart:(req, res)=>{
        res.render('opo')
    },
    report: (req, res)=>{
        res.render('report')
    },
    sigepo: (req, res)=>{
        res.render('sigepo')
    },
    salamatpo: (req, res)=>{
        res.render('salamatpo')
    }

};

module.exports = ml;