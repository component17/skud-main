<template>
    <el-card-module
            title="Список поситителей"
            showFooter
    >
        <template slot="card-header-actions">
            <el-button type="primary" @click="dialogVisible = true">Добавить посетителя</el-button>
        </template>


        <el-table
                :data="guests"
                style="width: 100%">
            <el-table-column
                    prop="name"
                    label="ФИО">
            </el-table-column>
            <el-table-column
                    prop="card"
                    label="ID Card">
            </el-table-column>
        </el-table>


        <template slot="card-footer">
            <el-pagination
                    :page-sizes="[100, 200, 300, 400]"
                    :page-size="100"
                    layout="sizes, prev, pager, next"
                    :total="400">
            </el-pagination>
        </template>

        <template slot="card-footer-actions">
            <el-button plain>Default</el-button>
            <el-button type="primary">Primary</el-button>
        </template>

        <el-dialog
                title="Tips"
                :visible.sync="dialogVisible">
            <span>This is a message</span>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">Отмена</el-button>
                <el-button type="primary" @click="dialogVisible = false">Добавить</el-button>
            </span>
        </el-dialog>

    </el-card-module>
</template>

<script>
    export default {
        data() {
            return {
                dialogVisible: false,
                guests: []
            }
        },
        created() {
            this.guests = this.$db.get('guests').value()
            console.log(this.guests);

            const SerialPort = require('serialport');

            SerialPort.list((err, data) => {
                data.map((i) => {
                    if(i.manufacturer === "Arduino LLC"){
                       let port = new SerialPort(i.comName)

                        port.on('open', () => {
                            console.log("PORT OPEN")
                        })

                        port.on('data', (data) => {
                            console.log("PORT DATA", data.toString())
                        })
                    }
                })
            })

            // const port = new SerialPort('/dev/tty-usbserial');
            //
            // port.on('open', function() {
            //     console.log("PORT OPEN")
            // });

// open errors will be emitted as an error event
//             port.on('error', function(err) {
//                 console.log('Error: ', err.message);
//             })


            //const Readline = SerialPort.parsers.Readline;
            //const port = new SerialPort('/dev/tty-usbserial1');
            // const parser = port.pipe(new Readline({ delimiter: '\n' }));
            // parser.on('data', console.log);
        }
    }
</script>

<style scoped>

</style>