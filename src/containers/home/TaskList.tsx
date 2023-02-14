import * as React from 'react';

import { Task } from '../../components';
import { IValidator, validateCDCI, calcTp } from '../../hooks/validator';

import DeployImg from '../../assets/images/deployment.svg';
import DeployBlackImg from '../../assets/images/deployment_black.svg';
import HealthCheckImg from '../../assets/images/health_check.svg';
import HealthCheckBlackImg from '../../assets/images/health_check_black.svg';
import ClockImg from '../../assets/images/clock.svg';
import ClockBlackImg from '../../assets/images/clock_black.svg';
import ConditionalImg from '../../assets/images/conditional.svg';
import ConditionalBlackImg from '../../assets/images/conditional_black.svg';
import DockerImg from '../../assets/images/docker.svg';
import DockerBlackImg from '../../assets/images/docker_black.svg';
import Docker2Img from '../../assets/images/docker_2.svg';
import Docker2BlackImg from '../../assets/images/docker_2_black.svg';
import Docker3Img from '../../assets/images/docker_3.svg';
import Docker3BlackImg from '../../assets/images/docker_3_black.svg';
import LintImg from '../../assets/images/lint.svg';
import LintBlackImg from '../../assets/images/lint_black.svg';
import SecretImg from '../../assets/images/secret.svg';
import SecretBlackImg from '../../assets/images/secret_black.svg';
import TestImg from '../../assets/images/test.svg';
import TestBlackImg from '../../assets/images/test_black.svg';
import HackerImg from '../../assets/images/hacker.svg';
import HackerBlackImg from '../../assets/images/hacker_black.svg';
import MailImg from '../../assets/images/mail.svg';
import MailBlackImg from '../../assets/images/mail_black.svg';
import StatsImg from '../../assets/images/stats.svg';
import StatsBlackImg from '../../assets/images/stats_black.svg';

const TaskList: React.FC<{ setTp: React.Dispatch<number> }> = props => {
    const [validated, setValidated] = React.useState<IValidator>(null);

    React.useEffect(() => {
        void validateCDCI().then(v => {
            setValidated(true);
            props.setTp(calcTp(true));
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            <Task
                completed={validated?.deploy}
                img={DeployImg}
                imgPlaceholder={DeployBlackImg}
                intlPrefix="task.deploy"
                isBadgeFirst={true}
            />
            <Task
                completed={validated?.test}
                img={TestImg}
                imgPlaceholder={TestBlackImg}
                intlPrefix="task.test"
            />
            <Task
                completed={validated?.lint}
                img={LintImg}
                imgPlaceholder={LintBlackImg}
                intlPrefix="task.lint"
                isBadgeFirst={true}
            />
            <Task
                completed={validated?.env}
                img={HealthCheckImg}
                imgPlaceholder={HealthCheckBlackImg}
                intlPrefix="task.env"
            />
            <Task
                completed={validated?.secret}
                img={SecretImg}
                imgPlaceholder={SecretBlackImg}
                intlPrefix="task.secret"
                isBadgeFirst={true}
            />
            <Task
                completed={validated?.docker1}
                img={DockerImg}
                imgPlaceholder={DockerBlackImg}
                intlPrefix="task.docker1"
            />
            <Task
                completed={validated?.docker2}
                img={Docker2Img}
                imgPlaceholder={Docker2BlackImg}
                intlPrefix="task.docker2"
                isBadgeFirst={true}
            />
            <Task
                completed={validated?.docker3}
                img={Docker3Img}
                imgPlaceholder={Docker3BlackImg}
                intlPrefix="task.docker3"
            />
            <Task
                completed={validated?.conditional}
                img={ConditionalImg}
                imgPlaceholder={ConditionalBlackImg}
                intlPrefix="task.conditional"
                isBadgeFirst={true}
            />
            <Task
                completed={validated?.mail}
                img={MailImg}
                imgPlaceholder={MailBlackImg}
                intlPrefix="task.mail"
            />
            <Task
                completed={validated?.stats}
                img={StatsImg}
                imgPlaceholder={StatsBlackImg}
                intlPrefix="task.status"
                isBadgeFirst={true}
            />
            <Task
                completed={validated?.timedDeploy}
                img={ClockImg}
                imgPlaceholder={ClockBlackImg}
                intlPrefix="task.clock"
            />
            <Task
                completed={validated?.hacker}
                img={HackerImg}
                imgPlaceholder={HackerBlackImg}
                intlPrefix="task.hacker"
                isBadgeFirst={true}
            />
        </>
    );
};

export { TaskList };
