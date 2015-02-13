var subject = require('./subject.js')
var mock = require('mock-fs');
var faker = require('faker')
subject.inc('',0.3099872579332441);
subject.inc(1,undefined);
subject.inc(-1,undefined);
mock({"path/fileExists":{},"pathContent":{"file1":"text content"}});
	subject.fileTest('path/fileExists','pathContent/file1');
mock.restore();
mock({"path/fileExists":{},"pathContent":{"file2":""}});
	subject.fileTest('path/fileExists','pathContent/file1');
mock.restore();
mock({"path/fileExists":{},"pathContent":{"file1":""}});
	subject.fileTest('path/fileExists','pathContent/file1');
mock.restore();
mock({"pathContent":{"file1":"text content"}});
	subject.fileTest('path/fileExists','pathContent/file1');
mock.restore();
subject.normalize(faker.phone.phoneNumberFormat());
subject.normalize(faker.phone.phoneNumberFormat());
subject.normalize('212-111-555');
subject.format(faker.phone.phoneNumberFormat(),'',"someValue");
subject.format(faker.phone.phoneNumberFormat(),'',"someValue");
subject.format('212-111-555','',"someValue");
subject.format('212-111-555','',"someValue");
subject.format('212-111-555','',{"normalize": true});
subject.blackListNumber(faker.phone.phoneNumberFormat());
subject.blackListNumber(faker.phone.phoneNumberFormat());
subject.blackListNumber('212-111-555');
