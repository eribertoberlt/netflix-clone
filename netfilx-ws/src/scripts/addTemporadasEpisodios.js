const database = require('../services/database');

const Filme =  require('../models/filme');
const Temporada =  require('../models/temporada');
const Episodio =  require('../models/episodio');


const addTemporadasEpisodios = async () => {
    try {
        const series = await Filme.find({ tipo: 'serie' }).select('_id');
        for(let serie of series) {
            console.log(`filme ${serie}----`);
            const numTemporada = Math.floor(Math.random() * 5) + 1;
            for(let i = 1; i <= numTemporada; i++) {
                console.log(`Inserindo temporada ${i} de ${numTemporada}`);
                const temporada = await new Temporada({
                    filme_id: serie,
                    titulo: `Temporada ${i}`
                }).save();

                const numEpisodios = Math.floor(Math.random() * 5) + 1;
                for(let x = 1; x <= numEpisodios; x++) {
                    console.log(`Inserindo episodio ${x} de ${numEpisodios}`);
                    await new Episodio({
                        temporada_id: temporada._id,
                        titulo: `Episodio ${x}`,
                        numero: x,
                        descricao: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
                        capa: 'https://picsum.photos/300/200'
                    }).save();
                }
            }
        }

        console.log('final do script');
    } catch(err) {
        console.log(err.message)
    }
}

addTemporadasEpisodios();